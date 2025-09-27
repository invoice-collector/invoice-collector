
import { SketchCollector } from '../../sketchCollector';

export class StatusIoCollector extends SketchCollector {

    static CONFIG = {
        id: "status_io",
        name: "Status.io",
        description: "i18n.collectors.status_io.description",
        version: "0",
        website: "https://app.status.io/dashboard/6013c4514fe4a10537f38d98/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745711.jpg",
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
        entryUrl: "https://app.status.io/dashboard/6013c4514fe4a10537f38d98/subscription",
    }

    constructor() {
        super(StatusIoCollector.CONFIG);
    }
}
