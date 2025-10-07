
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CloudradIoCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudrad_io",
        name: "CloudRad.io",
        description: "i18n.collectors.cloudrad_io.description",
        version: "0",
        website: "https://console.cloudrad.io/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1082092.jpg",
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
        entryUrl: "https://console.cloudrad.io/users/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloudradIoCollector.CONFIG);
    }
}
