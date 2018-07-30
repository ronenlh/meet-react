import * as React from 'react';
import { shallow } from 'enzyme';
import { Card } from './card';

describe('Button', () => {
    it('should render button correctly', () => {
        const wrapper = shallow(
            <Card
                onClick={() => {/**/}}
                disabled={false}
                isMatched={false}
                isOpen={false}
                value="A"
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should not call onClick when clicking the card and card is disabled', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Card
                onClick={onClick}
                disabled={true}
                isMatched={false}
                isOpen={false}
                value="A"
            />
        );
        wrapper.find('i').simulate('click');
        expect(onClick).not.toHaveBeenCalled();
    });
    it('should not call onClick when clicking the card and card is matched', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Card
                onClick={() => {/**/}}
                disabled={false}
                isMatched={true}
                isOpen={false}
                value="A"
            />
        );
        wrapper.find('i').simulate('click');
        expect(onClick).not.toHaveBeenCalled();
    });
    it('should call onClick when clicking the card', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Card
                onClick={() => {/**/}}
                disabled={false}
                isMatched={false}
                isOpen={true}
                value="A"
            />
        );
        wrapper.find('i').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
    it('should display card as open and disabled when isOpen prop is true', () => {
        const wrapper = shallow(
            <Card
                onClick={() => {/**/}}
                disabled={false}
                isMatched={false}
                isOpen={true}
                value="A"
            />
        );
        const className = wrapper.find('i').prop('className');
        expect(className).toContain('open');
        expect(className).toContain('disabled');
        expect(className).toContain('show');
    });

    it('should display card as matched when isMatched prop is true', () => {
        const wrapper = shallow(
            <Card
                onClick={() => {/**/}}
                disabled={false}
                isMatched={true}
                isOpen={false}
                value="A"
            />
        );
        const className = wrapper.find('i').prop('className');
        expect(className).toContain('match');
    });
});