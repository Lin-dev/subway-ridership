import React from 'react';
import { Line } from '@nivo/line';

class StationDetailsGraph extends React.Component {
  graphData() {
    const { complexData } = this.props;

    return ["entries", "exits"].map((field) => {
      return {
        'id': field,
        'data': Object.keys(complexData).map((key) => {
                  const data = complexData[key];
                  return {
                    "x": key,
                    "y":  data[field]
                  }
                })
      };
    })
  }

  render() {
    const theme = {
      axis: {
        ticks: {
          line: {
            stroke: "black"
          },
          text: {
            fill: "#333"
          }
        },
      },
      tooltip: {
        container: {
          background: '#ccc',
          color: '#333'
        }
      },
      legends: {
        text: {
          fill: '#333'
        }
      }
    };
    const format = (number) => {
      return number.toLocaleString('en-US')
    }

    const data = this.graphData();

    return (
      <Line
        width={440}
        height={300}
        margin={{
          top: 0,
          right: 0,
          bottom: 50,
          left: 50
        }}
        data={data}
        enableArea={false}
        colors={{'scheme': 'set2'}}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        enablePoints={false}
        enableGridY={true}
        enableGridX={false}
        isInteractive={true}
        useMesh={true}
        enableSlices={false}
        axisBottom={{
          format: '%Y-%m-%d',
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: format,
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 50,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: "#000000",
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                  on: "hover",
                  style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1
                  }
              }
            ]
          }
        ]}
        theme={theme}
      />
    )
  }
}

export default StationDetailsGraph;