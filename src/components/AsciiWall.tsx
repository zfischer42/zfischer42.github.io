import React, { useEffect, useRef, useState } from 'react';

export function AsciiWall() {
  const [grid, setGrid] = useState([]);
  const currentArtRef = useRef(0);
  const transitionRef = useRef({ 
    isTransitioning: false, 
    progress: 0, 
    lastDisplayStart: Date.now(),
    committedPositions: new Set() // Track positions that have committed to their final state
  });

  // https://patorjk.com/software/taag/#p=display&f=Georgia11&t=Graphic+Design&x=none&v=4&h=4&w=80&we=false
  const asciiArts = [
    [
      "                                                                                                   ",
      "                           ,,                       ,,                   ,,                        ",
      "MMM\"\"\"AMV                `7MM            `7MM\"\"\"YMM db                 `7MM                        ",
      "M'   AMV                   MM              MM    `7                      MM                        ",
      "'   AMV    ,6\"Yb.  ,p6\"bo  MMpMMMb.        MM   d `7MM  ,pP\"Ybd  ,p6\"bo  MMpMMMb.  .gP\"Ya `7Mb,od8 ",
      "   AMV    8)   MM 6M'  OO  MM    MM        MM\"\"MM   MM  8I   `\" 6M'  OO  MM    MM ,M'   Yb  MM' \"' ",
      "  AMV   ,  ,pm9MM 8M       MM    MM        MM   Y   MM  `YMMMa. 8M       MM    MM 8M\"\"\"\"\"\"  MM     ",
      " AMV   ,M 8M   MM YM.    , MM    MM        MM       MM  L.   I8 YM.    , MM    MM YM.    ,  MM     ",
      "AMVmmmmMM `Moo9^Yo.YMbmd'.JMML  JMML.    .JMML.   .JMML.M9mmmP'  YMbmd'.JMML  JMML.`Mbmmd'.JMML.   ",
      "                                                                                                   ",
      "                                                                                                   "
    ],
    [
      "                                                                             ",
      "                       ,,    ,,                                              ",
      "`7MM\"\"\"YMM           `7MM  `7MM       .M\"\"\"bgd mm                  `7MM      ",
      "  MM    `7             MM    MM      ,MI    \"Y MM                    MM      ",
      "  MM   d `7MM  `7MM    MM    MM      `MMb.   mmMMmm  ,6\"Yb.  ,p6\"bo  MM  ,MP'",
      "  MM\"\"MM   MM    MM    MM    MM        `YMMNq. MM   8)   MM 6M'  OO  MM ;Y   ",
      "  MM   Y   MM    MM    MM    MM      .     `MM MM    ,pm9MM 8M       MM;Mm   ",
      "  MM       MM    MM    MM    MM      Mb     dM MM   8M   MM YM.    , MM `Mb. ",
      ".JMML.     `Mbod\"YML..JMML..JMML.    P\"Ybmmd\"  `Mbmo`Moo9^Yo.YMbmd'.JMML. YA.",
      "                              "
    ],
    [
      "                                                                                                                            ",
      "                                       ,,          ,,                                              ,,                       ",
      "  .g8\"\"\"bgd                          `7MM          db              `7MM\"\"\"Yb.                      db                       ",
      ".dP'     `M                            MM                            MM    `Yb.                                             ",
      "dM'       ` `7Mb,od8 ,6\"Yb. `7MMpdMAo. MMpMMMb.  `7MM  ,p6\"bo        MM     `Mb  .gP\"Ya  ,pP\"Ybd `7MM  .P\"Ybmmm `7MMpMMMb.  ",
      "MM            MM' \"'8)   MM   MM   `Wb MM    MM    MM 6M'  OO        MM      MM ,M'   Yb 8I   `\"   MM :MI  I8     MM    MM  ",
      "MM.    `7MMF' MM     ,pm9MM   MM    M8 MM    MM    MM 8M             MM     ,MP 8M\"\"\"\"\"\" `YMMMa.   MM  WmmmP\"     MM    MM  ",
      "`Mb.     MM   MM    8M   MM   MM   ,AP MM    MM    MM YM.    ,       MM    ,dP' YM.    , L.   I8   MM 8M          MM    MM  ",
      "  `\"bmmmdPY .JMML.  `Moo9^Yo. MMbmmd'.JMML  JMML..JMML.YMbmd'      .JMMmmmdP'    `Mbmmd' M9mmmP' .JMML.YMMMMMb  .JMML  JMML.",
      "                              MM                                                                      6'     dP             ",
      "                            .JMML.                                                                    Ybmmmd'               "
    ]
  ];

  const subtitle = [
    "Hacking away at every layer of the stack,",
    "from backend solutions to frontend designs."
  ];

  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  useEffect(() => {
    const cols = Math.floor(window.innerWidth / 6.6); // Smaller character width
    const rows = Math.floor(window.innerHeight / 12); // Shorter line height

    const getArtPositions = (art) => {
      const positions = new Map();
      const maxLen = Math.max(...art.map(line => line.length));
      const startRow = Math.floor(rows / 2.7); // increase to move text up
      const startCol = Math.floor((cols - maxLen) / 2);

      art.forEach((line, lineIdx) => {
        for (let i = 0; i < line.length; i++) {
          if (line[i] !== ' ') {
            const row = startRow + lineIdx;
            const col = startCol + i;
            positions.set(`${row},${col}`, line[i]);
          }
        }
      });

      return { positions, startRow, startCol };
    };

    const getSubtitlePositions = () => {
      const positions = new Map();
      const artInfo = getArtPositions(asciiArts[0]);
      const startRow = artInfo.startRow + asciiArts[0].length + 3;

      subtitle.forEach((line, lineIdx) => {
        const startCol = Math.floor((cols - line.length) / 2);
        for (let i = 0; i < line.length; i++) {
          if (line[i] !== ' ') {
            const row = startRow + lineIdx;
            const col = startCol + i;
            positions.set(`${row},${col}`, line[i]);
          }
        }
      });

      return positions;
    };

    const displayDuration = 4000;
    const transitionDuration = 1000; // Increased from 1000ms to 1500ms

    const updateGrid = () => {
      const now = Date.now();
      const trans = transitionRef.current;

      if (!trans.isTransitioning && now - trans.lastDisplayStart > displayDuration) {
        trans.isTransitioning = true;
        trans.transitionStartTime = now;
        trans.committedPositions.clear(); // Reset committed positions for new transition
      }

      if (trans.isTransitioning) {
        trans.progress = (now - trans.transitionStartTime) / transitionDuration;

        if (trans.progress >= 1) {
          trans.progress = 0;
          trans.isTransitioning = false;
          currentArtRef.current = (currentArtRef.current + 1) % asciiArts.length;
          trans.lastDisplayStart = now;
          trans.committedPositions.clear(); // Clear committed positions when transition ends
        }
      }

      const prevArtIndex = currentArtRef.current;
      const nextArtIndex = (currentArtRef.current + 1) % asciiArts.length;

      const prevArt = getArtPositions(asciiArts[prevArtIndex]);
      const nextArt = getArtPositions(asciiArts[nextArtIndex]);
      const subtitlePositions = getSubtitlePositions();

      const newGrid = [];

      for (let row = 0; row < rows; row++) {
        newGrid[row] = [];

        for (let col = 0; col < cols; col++) {
          const posKey = `${row},${col}`;

          const inPrev = prevArt.positions.has(posKey);
          const inNext = nextArt.positions.has(posKey);
          const inSubtitle = subtitlePositions.has(posKey);

          let char = ' '; // Empty space by default
          let color = 'transparent';

          if (inSubtitle) {
            char = subtitlePositions.get(posKey);
            color = '#ffffff';
          } else if (trans.isTransitioning) {
            if (inPrev && inNext) {
              const prevChar = prevArt.positions.get(posKey);
              const nextChar = nextArt.positions.get(posKey);
              char = trans.progress < 0.5 ? prevChar : nextChar;
              color = '#ffffff';
            } else if (inPrev && !inNext) {
              // Character should disappear
              if (trans.committedPositions.has(posKey)) {
                // Already committed to off state
                char = ' ';
                color = 'transparent';
              } else {
                char = prevArt.positions.get(posKey);
                const flickerThreshold = Math.random();
                const adjustedProgress = trans.progress * trans.progress;

                if (flickerThreshold < adjustedProgress) {
                  // Flickered off - commit to off state
                  char = ' ';
                  color = 'transparent';
                  trans.committedPositions.add(posKey);
                } else {
                  color = '#ffffff';
                }
              }
            } else if (!inPrev && inNext) {
              // Character should appear
              if (trans.committedPositions.has(posKey)) {
                // Already committed to on state
                char = nextArt.positions.get(posKey);
                color = '#ffffff';
              } else {
                char = nextArt.positions.get(posKey);
                const flickerThreshold = Math.random();
                const adjustedProgress = trans.progress * trans.progress;

                if (flickerThreshold < adjustedProgress) {
                  // Flickered on - commit to on state
                  color = '#ffffff';
                  trans.committedPositions.add(posKey);
                } else {
                  char = ' ';
                  color = 'transparent';
                }
              }
            }
          } else {
            if (inPrev) {
              char = prevArt.positions.get(posKey);
              color = '#ffffff';
            }
          }

          newGrid[row][col] = { char, color };
        }
      }

      setGrid(newGrid);
    };

    updateGrid();
    const interval = setInterval(updateGrid, 30); // Faster updates for smoother animation

    const handleResize = () => {
      // Force re-initialization on resize to recenter text
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, rgba(9,9,11,0) 0%, rgba(9,9,11,.5) 50%, rgba(9,9,11) 100%)',
      fontFamily: 'monospace',
      fontSize: '11px',
      lineHeight: '1.05',
      whiteSpace: 'pre',
      userSelect: 'none',
      position: 'relative',
      zIndex: 1
    }}>
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} style={{ height: '12.55px' }}>
          {row.map((cell, colIdx) => (
            <span key={colIdx} style={{ color: cell.color }}>
              {cell.char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}