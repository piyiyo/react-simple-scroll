class SimpleScroll {
  scrollDown(event, callback = null) {
  		event.preventDefault();
  		let element = $('.'+event.target.id).offset();
  		let num = element.top;
  		this.scrollTo(num, 1250);
  		if (typeof callback == 'function') {
  			callback();
  		}
  }

	scrollTo(to, duration) {
			let start = document.scrollingElement.scrollTop,
					change = to - start,
					currentTime = 0,
					increment = 20;

			let animateScroll = function(){
					let ease = function (t, b, c, d) {
						if (t == 0) return b;
						if (t == d) return b + c;
						if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
						return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
					};
					currentTime += increment;
					let val = ease(currentTime, start, change, duration);
					document.scrollingElement.scrollTop = val;
					if(currentTime < duration) {
							setTimeout(animateScroll, increment);
					}
			};
			animateScroll();
	}
}

export default SimpleScroll;
