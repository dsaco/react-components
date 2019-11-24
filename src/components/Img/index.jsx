import React from 'react';
import ReactDOM from 'react-dom';
import { Spring, Transition, animated } from 'react-spring/renderprops';

export default function Img({
	src,
	placeholder,
	style,
	preview,
	onClick,
	maxwidth,
	maxheight,
	width,
	height,
	...rest
}) {
	const [loaded, set] = React.useState(false);
	const imgRef = React.useRef(null);
	React.useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			set(true);
		};
	}, []);
	const click = () => {
		if (preview) {
			view();
		} else {
			onClick && onClick();
		}
	};
	const view = () => {
		if (loaded) {
			const {
				x: left,
				y: top,
				width,
				height,
			} = imgRef.current.getBoundingClientRect();
			getInst().open({
				left,
				top,
				width,
				height,
				src,
			});
		}
	};
	if (placeholder && !loaded) {
		let auto = {};
		if (maxwidth && maxheight && width && height) {
			if (width > maxwidth && height > maxheight) {
				if (width / height > maxwidth / maxheight) {
					auto.width = maxwidth;
					auto.height = height / width * maxwidth;
				} else {
					auto.height = maxheight;
					auto.width = width / height * maxheight;
				}
			} else if (width > maxwidth) {
				auto.width = maxwidth;
				auto.height = height / width * maxwidth;
			} else if (height > maxheight) {
				auto.height = maxheight;
				auto.width = width / height * maxheight;
			} else {
				auto.width = width;
				auto.height = height;
			}
		}
		return (
			<div
				{...rest}
				style={{
					...style,
					...auto,
					display: 'inline-flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#eee',
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="44"
					height="44"
					viewBox="0 0 44 44"
					stroke="#fff"
				>
					<g fill="none" fillRule="evenodd" strokeWidth="2">
						<circle cx="22" cy="22" r="17.3535">
							<animate
								attributeName="r"
								begin="0s"
								dur="1.8s"
								values="1; 20"
								calcMode="spline"
								keyTimes="0; 1"
								keySplines="0.165, 0.84, 0.44, 1"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="stroke-opacity"
								begin="0s"
								dur="1.8s"
								values="1; 0"
								calcMode="spline"
								keyTimes="0; 1"
								keySplines="0.3, 0.61, 0.355, 1"
								repeatCount="indefinite"
							/>
						</circle>
						<circle cx="22" cy="22" r="19.9696">
							<animate
								attributeName="r"
								begin="-0.9s"
								dur="1.8s"
								values="1; 20"
								calcMode="spline"
								keyTimes="0; 1"
								keySplines="0.165, 0.84, 0.44, 1"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="stroke-opacity"
								begin="-0.9s"
								dur="1.8s"
								values="1; 0"
								calcMode="spline"
								keyTimes="0; 1"
								keySplines="0.3, 0.61, 0.355, 1"
								repeatCount="indefinite"
							/>
						</circle>
					</g>
					<script xmlns="" />
				</svg>
			</div>
		);
	} else if (loaded) {
		return (
			<img
				src={src}
				ref={imgRef}
				style={style}
				{...rest}
				onClick={click}
			/>
		);
	} else {
		return null;
	}
}
Img.defaultProps = {
	placeholder: false,
	style: {},
	preview: false,
};

class Modal extends React.PureComponent {
	state = {
		visible: false,
		src: '',
		style: {},
		toStyle: {},
	};
	open = ({ src, left, top, width, height }) => {
		const clientWidth = document.documentElement.clientWidth;
		const clientHeight = document.documentElement.clientHeight;
		document.body.classList.add('ds-body-no-scroll');
		const img = new Image();
		img.src = src;
		img.onload = () => {
			const iWidth = img.width;
			const iHeight = img.height;

			const offsetX = (clientWidth - width) / 2 - left;
			const offsetY = (clientHeight - height) / 2 - top;

			let scaleW;
			let scaleH;

			const bigerWidth = iWidth > clientWidth;
			const bigerHeight = iHeight > clientHeight;

			if (bigerWidth && bigerHeight) {
				if (iWidth / iHeight > clientWidth / clientHeight) {
					scaleW = clientWidth / width;
					scaleH = ((iHeight / iWidth) * clientWidth) / height;
				} else {
					scaleH = clientHeight / height;
					scaleW = ((iWidth / iHeight) * clientHeight) / width;
				}
			} else if (bigerWidth) {
				scaleW = clientWidth / width;
				scaleH = ((iHeight / iWidth) * clientWidth) / height;
			} else if (bigerHeight) {
				scaleH = clientHeight / height;
				scaleW = ((iWidth / iHeight) * clientHeight) / width;
			} else {
				scaleW = iWidth / width;
				scaleH = iHeight / height;
			}
			this.setState({
				src,
				style: { left, top, width, height },
				toStyle: {
					offsetX,
					offsetY,
					scaleW,
					scaleH,
				},
				visible: true,
			});
		};
	};
	close = () => {
		this.setState(
			{
				toStyle: {
					offsetX: 0,
					offsetY: 0,
					scaleW: 1,
					scaleH: 1,
				},
				visible: false,
			},
			() => {
				document.body.classList.remove('ds-body-no-scroll');
			}
		);
	};
	render() {
		const { visible, src, style, toStyle } = this.state;
		return (
			<Transition
				items={visible}
				from={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
				enter={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
				leave={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
			>
				{(item) =>
					item &&
					((props) => {
						return (
							<animated.div
								style={{
									position: 'fixed',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									...props,
								}}
								onClick={this.close}
							>
								<Spring
									from={{
										offsetX: 0,
										offsetY: 0,
										scaleW: 1,
										scaleH: 1,
									}}
									to={{
										offsetX: toStyle.offsetX,
										offsetY: toStyle.offsetY,
										scaleW: toStyle.scaleW,
										scaleH: toStyle.scaleH,
									}}
								>
									{(props) => {
										return (
											<animated.img
												style={{
													...style,
													position: 'absolute',
													transform: `translate3d(${props.offsetX}px, ${props.offsetY}px, 0) scale3d(${props.scaleW}, ${props.scaleH}, 1)`,
												}}
												src={src}
											/>
										);
									}}
								</Spring>
							</animated.div>
						);
					})
				}
			</Transition>
		);
	}
}

let modalInstance;

function getInst() {
	if (modalInstance) {
		return modalInstance;
	} else {
		const div = document.createElement('div');
		document.body.appendChild(div);
		return (modalInstance = ReactDOM.render(<Modal />, div));
	}
}
