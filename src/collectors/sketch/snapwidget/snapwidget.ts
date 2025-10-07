
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SnapwidgetCollector extends SketchCollector {

    static CONFIG = {
        id: "snapwidget",
        name: "Snapwidget",
        description: "i18n.collectors.snapwidget.description",
        version: "0",
        website: "https://snapwidget.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405787.jpg",
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
        entryUrl: "https://snapwidget.com/settings/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SnapwidgetCollector.CONFIG);
    }
}
