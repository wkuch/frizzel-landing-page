import React from 'react';
import Dropzone from 'react-dropzone'

export const FrizzelDropzone = (props) => (
  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
    {({ getRootProps, getInputProps }) => (
      <div>
        <div className='h4 border p-5 col-md-6 text-center' {...getRootProps()}>
          <input {...getInputProps()} />
          <div>
            Lade deine Bilder hier hoch
        </div>
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted h5">
          Klicke in den Bereich oder nutze 'Drag and drop' um dein Bilder hier hochzuladen.
        </small>
      </div>
    )}
  </Dropzone>
)
