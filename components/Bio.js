import ImageItem from './ImageItem'
import Section from './Section'
import { useKBar } from 'kbar'

export default function Bio() {
  return (
    <>
      <div className="bio-box">
        <div className="bio-heading">
          <div className="bio-text">
            <h1>Frank Rocha</h1>
            <p>
              Developer & FullStack Educator at @Driven
            </p>
          </div>
          <div className="bio-photo">
            <ImageItem
              quality={75}
              name="me.png"
              path="photos"
              alt="Bio image"
            />
          </div>
        </div>
        <div className="command-box">
          <Section delay={0.1}>
            <button
              type="button"
              className="btn-primary command-btn"
              onClick={useKBar().query.toggle}
              aria-label="Command Button"
            >
              Press <kbd className="tag-btn-key command-key">⌘</kbd>{' '}
              <kbd className="tag-btn-key k-key">K</kbd> to start →
            </button>
          </Section>
        </div>
      </div>
    </>
  )
}
