const FollowToggle = require("./follow_toggle");

$( () => {
    const $els = $("button.follow-toggle")
    $els.each( (idx, el) => {
        new FollowToggle(el);

    })
    
})