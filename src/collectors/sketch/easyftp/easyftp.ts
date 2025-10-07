
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyftpCollector extends SketchCollector {

    static CONFIG = {
        id: "easyftp",
        name: "easyFTP",
        description: "i18n.collectors.easyftp.description",
        version: "0",
        website: "https://www.easyftp.io/[user-name-placeholder]/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1675299.jpg",
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
        entryUrl: "https://www.easyftp.io/[user-name-placeholder]/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyftpCollector.CONFIG);
    }
}
