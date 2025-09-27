
import { SketchCollector } from '../../sketchCollector';

export class WorkableCollector extends SketchCollector {

    static CONFIG = {
        id: "workable",
        name: "workable",
        description: "i18n.collectors.workable.description",
        version: "0",
        website: "https://www.workable.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78120.jpg",
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
        entryUrl: "https://www.workable.com/signin",
    }

    constructor() {
        super(WorkableCollector.CONFIG);
    }
}
