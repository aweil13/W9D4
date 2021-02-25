class FollowToggle {
     constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        
        // this.$el.addEventListener('click', this.handleClick)
        this.$el.click(this.$el, this.handleClick.bind(this));
    }

    render() {
        if (this.followState === false) {
            debugger
            // this.$el.text("FOLLOW");
        }
        else if (this.followState === true){
            debugger
            // this.$el.text("UNFOLLOW");
        }
    }

    handleClick(e) {
       
        // e.preventDefault();
        if (this.followState === false) {
            $.ajax({
                method: "POST",
                url: `/users/${this.userId}/follow`,
                dataType: "json",
                success:  () => {this.followState = true;},
                
            });
        }
        else if (this.followState === true) {
            $.ajax({
                method: "DELETE",
                url: `/users/${this.userId}/follow`,
                dataType: "json",
                success:  () => {this.followState = false;},
            });
        }
    }

}

module.exports = FollowToggle;
