import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class InputImageFile extends Component {
    constructor(props) {
        super(props)
        this.onChange = (e) => {
            const originFiles = e.target.files
            let files = []
            try{
                files = Array.prototype.slice.call(originFiles)
            } catch(e){
                for(let i = 0,len = originFiles.length; i < len; i++){
                    files[i] = originFiles[i]
                }
            }
            files.map(file => {
                file.preview = window.URL.createObjectURL(file)
                return file
            })
            this.props.onChange(files)
        }
    }
    render() {
        const { multiple } = this.props
        return (
            <div className="ds-input-image-file" title="file">
                {this.props.children}
                <input accept="image/png, image/jpeg, image/gif" multiple={multiple} onChange={this.onChange} type="file"/>
            </div>
        )
    }
}

InputImageFile.propTypes = {
    multiple:PropTypes.bool,
    children:PropTypes.element.isRequired,
    onChange:PropTypes.func.isRequired
}

InputImageFile.defaultProps = {
    multiple: false
}
