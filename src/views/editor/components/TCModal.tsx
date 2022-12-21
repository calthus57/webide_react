import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col, Rating, Avatar, Popover } from '@douyinfe/semi-ui';
import reactIcon from '../assets/img/react.svg'
import { Justify } from 'react-bootstrap-icons';
import Meta from '@douyinfe/semi-ui/lib/es/card/meta';
import { IconInfoCircle } from '@douyinfe/semi-icons';
import './css/TCModal.css'

export const TCModal = () => {
  const [visible, setvisible] = useState(true)
  const handleOk = (e: React.MouseEvent<Element, MouseEvent>) => {
    setvisible(false)
  }
  return (
    <>
      <Button onClick={() => {
        setvisible(true)
      }}>create new project</Button>
      <Modal
        title="Start from a template"
        height={400}
        width={800}
        visible={visible}
        centered
        footer={null}
        maskClosable={false}
        onCancel={() => {
          setvisible(false)
        }}
      >
        <div className='cards'>
          <div className='card-item' onClick={() => {
            setvisible(false)
          }}>
            <Card className='t-card'
              shadows='hover'
              style={{ maxWidth: 360 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Meta
                title="Semi Doc"
                avatar={
                  <Avatar
                    alt='Card meta img'
                    size="default"
                    src={reactIcon}
                  />
                }
              />
              <Popover
                position='top'
                showArrow
                content={
                  <article style={{ padding: 6 }}>
                    这是一个 Card
                  </article>
                }
              >
                <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
              </Popover>
            </Card>
          </div>

          <div className='card-item' onClick={() => {
            setvisible(false)
          }}>
            <Card className='t-card'
              shadows='hover'
              style={{ maxWidth: 360 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Meta
                title="Semi Doc"
                avatar={
                  <Avatar
                    alt='Card meta img'
                    size="default"
                    src={reactIcon}
                  />
                }
              />
              <Popover
                position='top'
                showArrow
                content={
                  <article style={{ padding: 6 }}>
                    这是一个 Card
                  </article>
                }
              >
                <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
              </Popover>
            </Card>

          </div>

          <div className='card-item' onClick={() => {
            setvisible(false)
          }}>
            <Card className='t-card'
              shadows='hover'
              style={{ maxWidth: 360 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Meta
                title="Semi Doc"
                avatar={
                  <Avatar
                    alt='Card meta img'
                    size="default"
                    src={reactIcon}
                  />
                }
              />
              <Popover
                position='top'
                showArrow
                content={
                  <article style={{ padding: 6 }}>
                    这是一个 Card
                  </article>
                }
              >
                <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
              </Popover>
            </Card>
          </div>

          <div className='card-item' onClick={() => {
            setvisible(false)
          }}>
            <Card className='t-card'
              shadows='hover'
              style={{ maxWidth: 360 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Meta
                title="Semi Doc"
                avatar={
                  <Avatar
                    alt='Card meta img'
                    size="default"
                    src={reactIcon}
                  />
                }
              />
              <Popover
                position='top'
                showArrow
                content={
                  <article style={{ padding: 6 }}>
                    这是一个 Card
                  </article>
                }
              >
                <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
              </Popover>
            </Card>
          </div>

          <div className='card-item' onClick={() => {
            setvisible(false)
          }}>
            <Card className='t-card'
              shadows='hover'
              style={{ maxWidth: 360 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Meta
                title="Semi Doc"
                avatar={
                  <Avatar
                    alt='Card meta img'
                    size="default"
                    src={reactIcon}
                  />
                }
              />
              <Popover
                position='top'
                showArrow
                content={
                  <article style={{ padding: 6 }}>
                    这是一个 Card
                  </article>
                }
              >
                <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
              </Popover>
            </Card>

          </div>

          <div className='card-item' onClick={() => {
            setvisible(false)
          }}>
            <Card className='t-card'
              shadows='hover'
              style={{ maxWidth: 360 }}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Meta
                title="Semi Doc"
                avatar={
                  <Avatar
                    alt='Card meta img'
                    size="default"
                    src={reactIcon}
                  />
                }
              />
              <Popover
                position='top'
                showArrow
                content={
                  <article style={{ padding: 6 }}>
                    这是一个 Card
                  </article>
                }
              >
                <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
              </Popover>
            </Card>
          </div>

        </div>
      </Modal>
    </>
  );
}

