
import { SketchCollector } from '../../sketchCollector';

export class StreamsharkCollector extends SketchCollector {

    static CONFIG = {
        id: "streamshark",
        name: "StreamShark",
        description: "i18n.collectors.streamshark.description",
        version: "0",
        website: "https://app.streamshark.io/account#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730171.jpg",
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
        entryUrl: "https://app.streamshark.io/account#invoices",
    }

    constructor() {
        super(StreamsharkCollector.CONFIG);
    }
}
