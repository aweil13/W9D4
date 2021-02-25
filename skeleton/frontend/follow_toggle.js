class FollowToggle {
     constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.$el.on('click', this.handleClick)
    }

    render() {
        if (this.followState === false) {
            this.$el.text("FOLLOW")
        }
        else if (this.followState === true){
            this.$el.text("UNFOLLOW")
        }
    }

    handleClick(e) {
        e.preventDefault();
        if (this.followState === false) {
            $.ajax({
                method: "POST",
                url: "/users/:id/follow",
                dataType: "json",
                success:  () => {this.followState = true;},
                success: () => {this.render;}
            });
        }
        else if (this.followState === true) {
            $.ajax({
                method: "DELETE",
                url: "/users/:id/follow",
                dataType: "json",
                success:  () => {this.followState = false;},
                success: () => {this.render;}
            });
        }
    }

}

module.exports = FollowToggle;
