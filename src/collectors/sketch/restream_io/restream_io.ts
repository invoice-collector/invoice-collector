
import { SketchCollector } from '../../sketchCollector';

export class RestreamIoCollector extends SketchCollector {

    static CONFIG = {
        id: "restream_io",
        name: "Restream.io",
        description: "i18n.collectors.restream_io.description",
        version: "0",
        website: "https://restream.io/channel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23363.jpg",
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
        entryUrl: "https://restream.io/channel",
    }

    constructor() {
        super(RestreamIoCollector.CONFIG);
    }
}
