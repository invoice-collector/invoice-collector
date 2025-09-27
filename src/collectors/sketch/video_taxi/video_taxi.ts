
import { SketchCollector } from '../../sketchCollector';

export class VideoTaxiCollector extends SketchCollector {

    static CONFIG = {
        id: "video_taxi",
        name: "Video.Taxi",
        description: "i18n.collectors.video_taxi.description",
        version: "0",
        website: "https://service.video.taxi/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1426153.jpg",
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
        entryUrl: "https://service.video.taxi/invoices",
    }

    constructor() {
        super(VideoTaxiCollector.CONFIG);
    }
}
