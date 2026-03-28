"use client";

import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useId,
  FC,
  PointerEvent,
} from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  // 🔤 format text
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText]);

  // refs
  const measureRef = useRef<SVGTextElement | null>(null);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  // state
  const [isDragging, setIsDragging] = useState(false);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;

  // 📱 detect screen width
  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 📐 responsive curve
  const responsiveCurve = useMemo(() => {
    if (screenWidth < 640) return curveAmount * 0.4;
    if (screenWidth < 1024) return curveAmount * 0.7;
    return curveAmount;
  }, [screenWidth, curveAmount]);

  const pathD = `M-100,40 Q500,${40 + responsiveCurve} 1540,40`;

  // ⚡ responsive speed
  const responsiveSpeed = useMemo(() => {
    if (screenWidth < 640) return speed * 0.6;
    return speed;
  }, [screenWidth, speed]);

  // 🔤 generate looping text
  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2)
        .fill(text)
        .join("")
    : text;

  const ready = spacing > 0;

  // 📏 measure text width (ANTI GAGAL)
  useEffect(() => {
    if (!measureRef.current) return;

    const measure = () => {
      const length = measureRef.current?.getComputedTextLength() || 0;

      if (length > 0) {
        setSpacing(length);
        setOffset(-length);
      } else {
        requestAnimationFrame(measure);
      }
    };

    measure();
  }, [text, className]);

  // 🔄 animation loop
  useEffect(() => {
    if (!spacing || !ready) return;

    let frame = 0;

    const step = () => {
      if (!dragRef.current) {
        setOffset((prev) => {
          const delta =
            dirRef.current === "right" ? responsiveSpeed : -responsiveSpeed;

          let newOffset = prev + delta;
          const wrapPoint = spacing;

          if (newOffset <= -wrapPoint) newOffset += wrapPoint;
          if (newOffset > 0) newOffset -= wrapPoint;

          return newOffset;
        });
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, responsiveSpeed, ready]);

  // 🖱️ pointer events
  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;

    dragRef.current = true;
    setIsDragging(true);

    lastXRef.current = e.clientX;
    velRef.current = 0;

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragRef.current) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    setOffset((prev) => {
      let newOffset = prev + dx;
      const wrapPoint = spacing;

      if (newOffset <= -wrapPoint) newOffset += wrapPoint;
      if (newOffset > 0) newOffset -= wrapPoint;

      return newOffset;
    });
  };

  const endDrag = () => {
    if (!interactive) return;

    dragRef.current = false;
    setIsDragging(false);

    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = !interactive ? "auto" : isDragging ? "grabbing" : "grab";

  return (
    <div
      className="flex items-center justify-center w-full py-12 sm:py-16 md:py-20"
      style={{ cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-100/12 text-7xl lg:text-9xl"
        viewBox="0 0 1440 120"
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0 }}
        >
          {text}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {ready && (
          <text
            xmlSpace="preserve"
            className={`fill-[#B4284C] drop-shadow-md ${className ?? ""}`}
          >
            <textPath href={`#${pathId}`} startOffset={offset + "px"}>
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
