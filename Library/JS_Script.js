// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Select all buttons and apply grayscale filter
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.filter = 'grayscale(100%)';
});

// Select elements with class names
const status = document.querySelector('.status');
const reserve = document.querySelector('.reserve');
const checkout = document.querySelector('.checkout');
const checkin = document.querySelector('.checkin');

// Apply styles and status values to the elements
status.style.color = STATUS_MAP.shelf.color;
reserve.textContent = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled';
checkout.textContent = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled';
checkin.textContent = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled';