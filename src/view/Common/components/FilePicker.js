import React, { Component } from 'react';
import ReactFilepicker from 'react-filepicker';

const FILE_PICKER_KEY = 'A4dOeHXUnQHS0qVUJYRRez';

const SERVICES = {
  image: [
    'CLOUDDRIVE',
    'BOX',
    'CLOUDAPP',
    'DROPBOX',
    'EVERNOTE',
    'FACEBOOK',
    'FLICKR',
    'GMAIL',
    'GOOGLE_DRIVE',
    'PICASA',
    'IMGUR',
    'INSTAGRAM',
    'URL',
    'COMPUTER',
    'SKYDRIVE',
    'WEBCAM',
    'IMAGE_SEARCH',
    'CONVERT'
  ]
};

class FilePicker extends Component {
  render() {
    let options = {
      buttonText: '',
      buttonClass: this.props.className ? this.props.className : '',
      mimetype: this.props.mimetype,
      webcamDim: [1280, 720],
      webcam: {
        videoRes: '1280x720'
      },
      services: SERVICES[this.props.servicesType]
    };
    this.props.cropRatio && (options.cropRatio = this.props.cropRatio);

    return (
      <ReactFilepicker
        apikey={FILE_PICKER_KEY}
        options={options}
        onSuccess={this.props.onSuccess}
      />
    );
  }
}

export default FilePicker;
