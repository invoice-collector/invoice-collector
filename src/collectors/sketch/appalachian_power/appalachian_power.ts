
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppalachianPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "appalachian_power",
        name: "Appalachian Power",
        description: "i18n.collectors.appalachian_power.description",
        version: "0",
        website: "https://www.appalachianpower.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4465100.jpg",
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
        entryUrl: "https://www.appalachianpower.com/account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppalachianPowerCollector.CONFIG);
    }
}
