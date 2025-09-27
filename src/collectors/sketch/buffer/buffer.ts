
import { SketchCollector } from '../../sketchCollector';

export class BufferCollector extends SketchCollector {

    static CONFIG = {
        id: "buffer",
        name: "buffer",
        description: "i18n.collectors.buffer.description",
        version: "0",
        website: "https://buffer.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4298.jpg",
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
        entryUrl: "https://buffer.com/signin",
    }

    constructor() {
        super(BufferCollector.CONFIG);
    }
}
