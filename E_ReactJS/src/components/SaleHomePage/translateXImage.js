import { useEffect, useRef, useState } from 'react';

const useTranslateX = () => {
    const previousScrollPosition = useRef(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const [translateXPosition, setTranslateXPosition] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up');
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => {
            window.removeEventListener('scroll', scrollTracking);
        };
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition };
}; //useTranslateXImage phải có chữ use => HookCustom để phân biệt với các function khác, nó sẽ trả về một object có 2 thuộc tính là translateXPosition và handleTranslateX, translateXPosition sẽ được sử dụng để điều khiển vị trí của hình ảnh khi người dùng cuộn trang, handleTranslateX sẽ được gọi khi người dùng cuộn trang để cập nhật giá trị của translateXPosition dựa trên vị trí cuộn hiện tại.

export default useTranslateX;
