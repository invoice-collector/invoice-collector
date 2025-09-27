
import { SketchCollector } from '../../sketchCollector';

export class NewHorizonCommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "new_horizon_communications",
        name: "New Horizon Communications",
        description: "i18n.collectors.new_horizon_communications.description",
        version: "0",
        website: "https://apps.nhcgrp.com/map/invoices.cfm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798733.jpg",
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
        entryUrl: "https://apps.nhcgrp.com/map/invoices.cfm",
    }

    constructor() {
        super(NewHorizonCommunicationsCollector.CONFIG);
    }
}
