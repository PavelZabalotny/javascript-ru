import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {setSelectDayPicker} from '../AC/index';

class Example extends React.Component {
    static defaultProps = {
        numberOfMonths: 1,
    };
    //  state = {
    //      from: null,
    //      to: null,
    // };
    // constructor(props) {
    //     super(props);
    //     this.state = Example.getInitialState();
    // }

    // static getInitialState() {
    //     return {
    //         from: undefined,
    //         to: undefined,
    //     };
    // }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.selectDayPicker);
        setSelectDayPicker(range);
    };

    handleResetClick = () => this.props.resetDayPicker;

    render() {
        console.log('this.props.selectDayPicker.from', this.props.selectDayPicker.from);
        const {from, to} = this.props.selectDayPicker;
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
    selectDayPicker: state.selectDayPicker
});

export default connect(mapStateToProps, {setSelectArticles: setSelectDayPicker})(Example)