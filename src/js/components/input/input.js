const React = require('react');
const Destination = require('./destination');
const Dates = require('./dates')
const Plan = require('./plan')

const Input = () => {
  return (
    <div>
      <Destination />
      <Dates />
      <Plan />
    </div>
  )
}

module.exports = Input;
