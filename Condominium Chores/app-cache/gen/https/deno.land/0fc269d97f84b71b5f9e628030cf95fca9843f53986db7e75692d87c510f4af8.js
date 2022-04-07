import { deferred } from "./deferred.ts";
export class DeadlineError extends Error {
    constructor(){
        super("Deadline");
        this.name = "DeadlineError";
    }
}
/**
 * Create a promise which will be rejected with DeadlineError when a given delay is exceeded.
 */ export function deadline(p, delay) {
    const d = deferred();
    const t = setTimeout(()=>d.reject(new DeadlineError())
    , delay);
    return Promise.race([
        p,
        d
    ]).finally(()=>clearTimeout(t)
    );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEyMC4wL2FzeW5jL2RlYWRsaW5lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmVycmVkIH0gZnJvbSBcIi4vZGVmZXJyZWQudHNcIjtcblxuZXhwb3J0IGNsYXNzIERlYWRsaW5lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiRGVhZGxpbmVcIik7XG4gICAgdGhpcy5uYW1lID0gXCJEZWFkbGluZUVycm9yXCI7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwcm9taXNlIHdoaWNoIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCBEZWFkbGluZUVycm9yIHdoZW4gYSBnaXZlbiBkZWxheSBpcyBleGNlZWRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWRsaW5lPFQ+KHA6IFByb21pc2U8VD4sIGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgZCA9IGRlZmVycmVkPG5ldmVyPigpO1xuICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiBkLnJlamVjdChuZXcgRGVhZGxpbmVFcnJvcigpKSwgZGVsYXkpO1xuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtwLCBkXSkuZmluYWxseSgoKSA9PiBjbGVhclRpbWVvdXQodCkpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sR0FBRyxRQUFRLFFBQVEsQ0FBZTtBQUV4QyxNQUFNLE9BQU8sYUFBYSxTQUFTLEtBQUs7aUJBQ3hCLENBQUM7UUFDYixLQUFLLENBQUMsQ0FBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQWU7SUFDN0IsQ0FBQzs7QUFHSCxFQUVHLEFBRkg7O0NBRUcsQUFGSCxFQUVHLENBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBSSxDQUFhLEVBQUUsS0FBYSxFQUFjLENBQUM7SUFDckUsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRO0lBQ2xCLEtBQUssQ0FBQyxDQUFDLEdBQUcsVUFBVSxLQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWE7TUFBSyxLQUFLO0lBQy9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQUUsQ0FBQztJQUFBLENBQUMsRUFBRSxPQUFPLEtBQU8sWUFBWSxDQUFDLENBQUM7O0FBQzFELENBQUMifQ==