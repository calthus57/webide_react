import React, { useState } from 'react';
import { Tree } from '@douyinfe/semi-ui';
import { DragTreeNode } from "@douyinfe/semi-ui/lib/es/tree";

export default function Directory() {
  const initialData = [
    {
      label: 'Asia',
      value: 'Asia',
      key: 'Asia',
      children: [
        {
          label: 'China',
          value: 'China',
          key: 'China',
          children: [
            {
              label: 'Beijing',
              value: 'Beijing',
              key: 'Beijing',
            },
            {
              label: 'Shanghai',
              value: 'Shanghai',
              key: 'Shanghai',
            },
          ],
        },
        {
          label: 'Japan',
          value: 'Japan',
          key: 'Japan',
          children: [
            {
              label: 'Osaka',
              value: 'Osaka',
              key: 'Osaka'
            }
          ]
        },
      ],
    },
    {
      label: 'North America',
      value: 'North America',
      key: 'North America',
      children: [
        {
          label: 'United States',
          value: 'United States',
          key: 'United States'
        },
        {
          label: 'Canada',
          value: 'Canada',
          key: 'Canada'
        }
      ]
    },
    {
      label: 'Europe',
      value: 'Europe',
      key: 'Europe',
    }
  ];
  const [treeData, setTreeData] = useState(initialData);
  const style = {
    width: 260,
    height: 420,
    border: '1px solid var(--semi-color-border)'
  };
  const onDrop = (info: { dropPosition?: any; dropToGap?: any; node?: DragTreeNode; dragNode?: any; }) => {
    const { dropToGap, node, dragNode } = info;
    // @ts-ignore
    const dropKey = node.key;
    console.log(dropKey)
    const dragKey = dragNode.key;
    // @ts-ignore
    const dropPos = node.pos.split('-');
    console.log(dropPos)
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const data = [...treeData];
    const loop = (data: any[], key: any, callback: { (item: any, ind: any, arr: any): void }) => {
      data.forEach((item, ind, arr) => {
        if (item.key === key) return callback(item, ind, arr);
        if (item.children) return loop(item.children, key, callback);
      });
    };
    let dragObj: any;
    loop(data, dragKey, (item, ind, arr) => {
      arr.splice(ind, 1);
      dragObj = item;
    });

    if (!dropToGap) {
      // inset into the dropPosition
      loop(data, dropKey, (item, ind, arr) => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    } else { // @ts-ignore
      if (dropPosition === 1 && node.children && node.expanded) {
        // has children && expanded and drop into the node bottom gap
        // insert to the top
        loop(data, dropKey, item => {
          item.children = item.children || [];
          item.children.unshift(dragObj);
        });
      } else {
        let dropNodeInd;
        let dropNodePosArr;
        loop(data, dropKey, (item, ind, arr) => {
          dropNodePosArr = arr;
          dropNodeInd = ind;
        });
        if (dropPosition === -1) {
          // insert to top
          // @ts-ignore
          dropNodePosArr.splice(dropNodeInd, 0, dragObj);
        } else {
          // insert to bottom
          // @ts-ignore
          dropNodePosArr.splice(dropNodeInd + 1, 0, dragObj);
        }
      }
    }
    setTreeData(data);
  }
  return (
    <Tree
      className='directory'
      treeData={treeData}
      filterTreeNode
      directory
      draggable
      onDrop={onDrop}
      style={style}
    />
  );
};
