
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StoreLocatorWidgetsCollector extends SketchCollector {

    static CONFIG = {
        id: "store_locator_widgets",
        name: "Store Locator Widgets",
        description: "i18n.collectors.store_locator_widgets.description",
        version: "0",
        website: "https://www.storelocatorwidgets.com/admin/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102720.jpg",
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
        entryUrl: "https://www.storelocatorwidgets.com/admin/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StoreLocatorWidgetsCollector.CONFIG);
    }
}
