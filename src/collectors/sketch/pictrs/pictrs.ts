
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PictrsCollector extends SketchCollector {

    static CONFIG = {
        id: "pictrs",
        name: "Pictrs",
        description: "i18n.collectors.pictrs.description",
        version: "0",
        website: "https://www.pictrs.com/shopadmin/my_bills#tab-shopfee",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32231.jpg",
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
        entryUrl: "https://www.pictrs.com/shopadmin/my_bills#tab-shopfee",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PictrsCollector.CONFIG);
    }
}
