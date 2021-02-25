class FollowToggle {
     constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
    }

    render() {
        if (this.followState === false) {
            this.$el.text("FOLLOW")
        }
        else if (this.followState === true){
            this.$el.text("UNFOLLOW")
        }
    }
}

module.exports = FollowToggle;
