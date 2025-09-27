
import { SketchCollector } from '../../sketchCollector';

export class SpyserpCollector extends SketchCollector {

    static CONFIG = {
        id: "spyserp",
        name: "SpySERP",
        description: "i18n.collectors.spyserp.description",
        version: "0",
        website: "https://spyserp.com/panel/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4100826.jpg",
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
        entryUrl: "https://spyserp.com/panel/signin",
    }

    constructor() {
        super(SpyserpCollector.CONFIG);
    }
}
