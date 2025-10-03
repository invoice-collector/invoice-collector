
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RenderstreetCollector extends SketchCollector {

    static CONFIG = {
        id: "renderstreet",
        name: "RenderStreet",
        description: "i18n.collectors.renderstreet.description",
        version: "0",
        website: "https://jobs.render.st/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116245.jpg",
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
        entryUrl: "https://jobs.render.st/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RenderstreetCollector.CONFIG);
    }
}
