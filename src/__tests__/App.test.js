import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";


describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test("Passing the number of events (32 events)", () => {
        const AppWrapper = mount(<App />);
        const AppNumberOfEventsState = AppWrapper.state("numberOfEvents");
        expect(AppNumberOfEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().numberOfEvents).toEqual(32);
        AppWrapper.unmount();
    });


});