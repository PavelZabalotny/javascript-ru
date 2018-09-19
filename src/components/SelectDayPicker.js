import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {setSelectDayPicker} from '../AC/index';
import {resetDayPicker} from '../AC/index';

class Example extends React.Component {
    static defaultProps = {
        numberOfMonths: 1,
    };

    handleDayClick = (day) => {
        const {range, setSelectDayPicker} = this.props;
        setSelectDayPicker(DateUtils.addDayToRange(day, range));
    };

    handleResetClick = () => this.props.resetDayPicker();

    render() {
        const {from, to} = this.props.range;
        const modifiers = {start: from, end: to};
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>

                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <Helmet>
                    <style>{`
                      .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                        background-color: #f0f8ff !important;
                        color: #4a90e2;
                      }
                      .Selectable .DayPicker-Day {
                        border-radius: 0 !important;
                      }
                      .Selectable .DayPicker-Day--start {
                        border-top-left-radius: 50% !important;
                        border-bottom-left-radius: 50% !important;
                      }
                      .Selectable .DayPicker-Day--end {
                        border-top-right-radius: 50% !important;
                        border-bottom-right-radius: 50% !important;
                      }
    `               }</style>
                </Helmet>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    range: state.filters.dateRange
});

export default connect(mapStateToProps, {setSelectDayPicker, resetDayPicker})(Example)