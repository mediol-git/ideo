const boxes = document.querySelectorAll('.img-wrapper');
const items = [];

const Mode = Object.freeze({
	Idle: 1 << 0,
	Move: 1 << 1,
	Return: 1 << 2
});

const update = () => {
	for (const item of items) {
		if (item.mode !== Mode.Idle) {
			item.position.x += item.velocity.x;
			item.position.y += item.velocity.y;

			item.entity.style.setProperty('transform', `translate(${item.position.x}px, ${item.position.y}px)`);

			if (item.position.x !== 0 || item.position.y !== 0) {
				if (item.mode === Mode.Move) {
					item.velocity.x *= 0.975;
					item.velocity.y *= 0.975;

					if (Math.abs(item.velocity.x) < 0.1 && Math.abs(item.velocity.y) < 0.1) {
						[item.mouse.current.x, item.mouse.current.y] = [null, null];
						[item.mouse.previous.x, item.mouse.previous.y] = [null, null];

						item.mode = Mode.Return;
					}
				} else {
					[item.velocity.x, item.velocity.y] = [item.position.x / -50, item.position.y / -50];

					if (Math.abs(item.velocity.x) < 0.1 && Math.abs(item.velocity.y) < 0.1) {
						[item.position.x, item.position.y] = [0, 0];
						[item.velocity.x, item.velocity.y] = [0, 0];
					}
				}
			} else {
				item.mode = Mode.Idle;
			}
		}
	}
	
	requestAnimationFrame(update);
};

const init = () => {
	for (const box of boxes) {
		const item = {
			entity: box,
			position: {
				x: 0,
				y: 0
			},
			velocity: {
				x: 0,
				y: 0
			},
			mouse: {
				current: {
					x: null,
					y: null
				},
				previous: {
					x: null,
					y: null
				}
			},
			mode: Mode.Idle
		};

		box.addEventListener('mousemove', event => {
			[item.mouse.current.x, item.mouse.current.y] = [event.offsetX, event.offsetY];

			if (item.mouse.previous.x !== null && item.mouse.previous.y !== null) {
				item.velocity.x += (item.mouse.current.x - item.mouse.previous.x) / 250;
				item.velocity.y += (item.mouse.current.y - item.mouse.previous.y) / 250;
			}
			
			[item.mouse.previous.x, item.mouse.previous.y] = [item.mouse.current.x, item.mouse.current.y];
			
			item.mode = Mode.Move;
		});
		
		box.addEventListener('mouseleave', event => {
			[item.mouse.current.x, item.mouse.current.y] = [null, null];
			[item.mouse.previous.x, item.mouse.previous.y] = [null, null];
		});
		
		items.push(item);
	}
	
	requestAnimationFrame(update);
};

window.addEventListener('DOMContentLoaded', init);