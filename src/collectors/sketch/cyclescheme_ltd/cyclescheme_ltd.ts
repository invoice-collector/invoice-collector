
import { SketchCollector } from '../../sketchCollector';

export class CycleschemeLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "cyclescheme_ltd",
        name: "Cyclescheme Ltd  ",
        description: "i18n.collectors.cyclescheme_ltd.description",
        version: "0",
        website: "https://extranet.myschemes.co.uk/cs/index/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153542.jpg",
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
        entryUrl: "https://extranet.myschemes.co.uk/cs/index/index",
    }

    constructor() {
        super(CycleschemeLtdCollector.CONFIG);
    }
}
