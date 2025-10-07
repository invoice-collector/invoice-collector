
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlickrCollector extends SketchCollector {

    static CONFIG = {
        id: "flickr",
        name: "Flickr",
        description: "i18n.collectors.flickr.description",
        version: "0",
        website: "https://www.flickr.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773838.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.flickr.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlickrCollector.CONFIG);
    }
}
