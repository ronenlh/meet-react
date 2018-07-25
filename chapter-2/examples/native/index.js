document.addEventListener('DOMContentLoaded', start);

function start() {
    // Reusable component
    const Button = (props) => {
        const btn = document.createElement('button');
        btn.textContent = props.value;
        btn.addEventListener('click', props.onClick);
        return btn;
    }


    // usage
    const agreeButton = Button({value: 'OK', onClick: onOkClick});
    const cancelButton = Button({value: 'Cancel', onClick: onCancelClick});
    
    // attach to document body
    document.body.appendChild(agreeButton);
    document.body.appendChild(cancelButton);

    // cb functions
    function onOkClick() {
        alert('ok clicked!');
    }

    function onCancelClick() {
        alert('canceled...')
    }
}