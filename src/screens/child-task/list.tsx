import React, { useRef, useState } from "react";
import { ChildTask } from "types/task";
import { AutoCenter, Image, Grid, Swiper } from "antd-mobile";
import { SwiperRef } from "antd-mobile/es/components/swiper";
import leftArrowSrc from "assets/left-arrow.png";
import rightArrowSrc from "assets/right-arrow.png";
import { Link } from "react-router-dom";
interface ListProps {
  tasks: ChildTask[];
}
function getNewArr(arr: ChildTask[], n: number) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr.slice(i, i + n));
  }
  return newArr;
}

export const List = ({ tasks }: ListProps) => {
  const NewList = getNewArr(tasks, 6);
  const ref = useRef<SwiperRef>(null);
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState(0);

  const onIndexChange = (index: number) => {
    setCurrentSwiperIndex(index);
  };
  const items = NewList.map((group, index) => (
    <Swiper.Item key={index}>
      <div className="task-content content">
        <Grid columns={2} gap={"4vh"} className="task-box">
          {group.map((task) => {
            return (
              <Link
                to={`step/${String(task.businessId)}`}
                key={task.businessId}
              >
                <Grid.Item className="task-item" onClick={() => {}}>
                  <AutoCenter>{task.businessName}</AutoCenter>
                </Grid.Item>
              </Link>
            );
          })}
        </Grid>
      </div>
    </Swiper.Item>
  ));
  const listItems = (
    <div>
      <Swiper
        allowTouchMove={true}
        ref={ref}
        loop
        onIndexChange={(index) => onIndexChange(index)}
      >
        {items}
      </Swiper>
      {currentSwiperIndex > 0 && (
        <div
          className="arrow-left"
          onClick={() => {
            ref.current?.swipePrev();
          }}
        >
          <Image src={leftArrowSrc} width={100} height={100} fit="contain" />
        </div>
      )}
      {currentSwiperIndex < NewList.length - 1 && (
        <div
          className="arrow-right"
          onClick={() => {
            ref.current?.swipeNext();
          }}
        >
          <Image src={rightArrowSrc} width={100} height={100} fit="contain" />
        </div>
      )}
    </div>
  );
  return <>{listItems}</>;
};