self.addEventListener('message', function check(props) {
    var result = false;
    const itemIndex = props.data.items.findIndex( (item) => item.word === props.data.word );
    if (itemIndex === -1)
        result = false;
    else
        result = true;
    postMessage(result);
    self.close();
}, false);