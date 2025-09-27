
import { SketchCollector } from '../../sketchCollector';

export class Versicherungscheck24Collector extends SketchCollector {

    static CONFIG = {
        id: "versicherungscheck24",
        name: "Versicherungscheck24",
        description: "i18n.collectors.versicherungscheck24.description",
        version: "0",
        website: "https://mvp.i-planner.cloud/app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4605130.jpg",
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
        entryUrl: "https://mvp.i-planner.cloud/app/login",
    }

    constructor() {
        super(Versicherungscheck24Collector.CONFIG);
    }
}
