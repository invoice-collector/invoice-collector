
import { SketchCollector } from '../../sketchCollector';

export class Pax8Collector extends SketchCollector {

    static CONFIG = {
        id: "pax8",
        name: "Pax8",
        description: "i18n.collectors.pax8.description",
        version: "0",
        website: "https://app.pax8.com/billing?activeTab=Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284732.jpg",
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
        entryUrl: "https://app.pax8.com/billing?activeTab=Invoices",
    }

    constructor() {
        super(Pax8Collector.CONFIG);
    }
}
