
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TkElevatorCollector extends SketchCollector {

    static CONFIG = {
        id: "tk_elevator",
        name: "TK Elevator",
        description: "i18n.collectors.tk_elevator.description",
        version: "0",
        website: "https://de.webportal.tkelevator.com/wps/portal/customer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367975.jpg",
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
        entryUrl: "https://de.webportal.tkelevator.com/wps/portal/customer",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TkElevatorCollector.CONFIG);
    }
}
