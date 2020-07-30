import React from "react";
import {UncontrolledRating} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'uncontrolled Rating stories',
    component: UncontrolledRating
}

let callback = action('rating changed inside component');

export const EmptyUncontrolled1 = () => <UncontrolledRating defaultVal={0} onClick={callback}/>
export const RatingUncontrolled1 = () => <UncontrolledRating defaultVal={1} onClick={callback}/>
export const RatingUncontrolled2 = () => <UncontrolledRating defaultVal={2} onClick={callback}/>
export const RatingUncontrolled3 = () => <UncontrolledRating defaultVal={3} onClick={callback}/>
export const RatingUncontrolled4 = () => <UncontrolledRating defaultVal={4} onClick={callback}/>
export const RatingUncontrolled5 = () => <UncontrolledRating defaultVal={5} onClick={callback}/>