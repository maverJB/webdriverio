import {Given} from 'cucumber'
import {When} from 'cucumber'
import {Then} from 'cucumber'
import {assert} from "@sindresorhus/is";

Given(/^I go to the google page$/, function () {
    browser.url('https://www.google.com.pe')
});

When(/^I enter a text "([^"]*)"$/, function (textToSearch) {
    $("[name='q']").setValue(textToSearch)
});

When(/^I click on search button$/, function () {
    $("[name='btnK']").click()
});

Then(/^I should found the text searched "([^"]*)" in the results page$/, function (textToSearch) {
    assert.truthy( $("[id='search']").contains(textToSearch))
});