
import { SketchCollector } from '../../sketchCollector';

export class MifidRecorderCollector extends SketchCollector {

    static CONFIG = {
        id: "mifid_recorder",
        name: "MiFID-Recorder",
        description: "i18n.collectors.mifid_recorder.description",
        version: "0",
        website: "https://login.mifid-recorder.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2693311.jpg",
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
        entryUrl: "https://login.mifid-recorder.com",
    }

    constructor() {
        super(MifidRecorderCollector.CONFIG);
    }
}
