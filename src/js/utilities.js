import InputMask from "inputmask";

export class utilities {

    static clearForm(form) {
        const formElems = form.elements;

        for (var i = 0; i < formElems.length; i++) {
            if (formElems[i].type === 'submit' || formElems[i].type === 'button') {
                continue;
            }

            formElems[i].value = '';
        }
    }

    static serialize(form) {
        // Setup our serialized data
        let serialized = [];

        // Loop through each field in the form
        for (var i = 0; i < form.elements.length; i++) {
            let field = form.elements[i];

            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') {
                continue;
            }

            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
                for (let n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
                }
            }
            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }
        }

        return serialized.join('&');
    }

    static formInputs(formId) {
        return document.getElementById(formId).elements;
    }

    static getHeight(descriptor, type = 'id') {
        let elem;

        if (type === 'id') {
            elem = document.getElementById(descriptor);
        } else {
            elem = document.getElementsByClassName(descriptor);
        }

        return elem.offsetHeight;
    }

    static scrollToTop(duration = 250) {
        const scrollInterval = setInterval(function () {
            const windowPos = (!window.scrollY) ? window.pageYOffset : window.scrollY;
            const scrollStep = -windowPos / (duration / 15) - 16;

            if (windowPos != 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

    static createHiddenInput(name, value) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;

        return input;
    }

    static notifications(containerElem, msg) {
        const notificationStatus = msg.status === 'error' ? 'alert-danger' : 'alert-success';
        const alertContainer = document.createElement('div');
        alertContainer.classList.add('alert', notificationStatus);
        alertContainer.id = 'notification-container';
        alertContainer.innerText = msg.message;
        containerElem.insertBefore(alertContainer, containerElem.firstChild);

        if (msg.status === 'success') {
            utilities.clearForm(containerElem);
        }
    }

    static displayValidationErrorsByNameForForm(formElem, errors, extraClasses) {
        const inputs = formElem.elements;
        errors.forEach(error => {
            const elem = inputs[error.attribute];
            const errorContainer = document.createElement('span');
            errorContainer.classList.add('validation-error', extraClasses);
            errorContainer.innerText = error.error;
            elem.parentElement.appendChild(errorContainer);
        });
    }

    static clearErrorsForForm(formElem) {
        const errors = formElem.querySelectorAll(".validation-error");

        if (errors !== null && errors.length > 0) {
            for (let i = 0; i <= errors.length - 1; i++) {
                errors[i].parentElement.removeChild(errors[i]);
            }
        }
    }

    static clearNotifications(containerElem) {
        const elements = containerElem.getElementsByClassName('alert');

        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    static createLoader(containerElem) {
        const loader = document.createElement('div');
        loader.className = 'loader-container';
        loader.innerHTML = '<i class="fal fa-circle-notch fa-spin fa-5x"></i>';

        containerElem.insertBefore(loader, containerElem.firstChild);
    }

    static removeLoader() {
        const elements = document.getElementsByClassName('loader-container');

        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    static setDropdownMenuScrollHeight(elem, headerHeight, window) {
        let dropdownHeight = 311;

        if (window.innerWidth >= 1199) {
            elem.removeAttribute('style');
            return;
        }

        if (window.innerHeight < (311 + headerHeight)) {
            dropdownHeight = 311 - headerHeight;
        }

        elem.setAttribute('style', 'max-height: ' + dropdownHeight + 'px');
    }

    static removeSiblingElementByClass(element, className) {
        if (element.nextElementSibling !== null) {
            if (element.nextElementSibling.classList.contains(className)) {
                element.parentNode.removeChild(element.nextElementSibling);
            }
        }
    }

    static setInputMask(elemID, type) {
        const elem = document.getElementById(elemID);

        switch (type) {
            case 'zip':
                let zipMask = new InputMask('99999');
                zipMask.mask(elem);
                break;
            case 'phone':
                let phoneMask = new InputMask('(999) 999-9999', {
                    'autoUnmask': true,
                    'removeMaskOnSubmit': true
                });
                phoneMask.mask(elem);
                break;
        }
    }

    static formatPhoneNumber(number) {
        var cleaned = ('' + number).replace(/\D/g, '')
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return '';
    }

    static isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static getDocumentHeight() {
        return Math.max(
            document.documentElement["clientHeight"],
            document.body["scrollHeight"],
            document.documentElement["scrollHeight"],
            document.body["offsetHeight"],
            document.documentElement["offsetHeight"]
        );
    }
}