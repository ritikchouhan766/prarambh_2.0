import { APPS_SCRIPT_URL } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return Response.json(
        { success: false, message: "Invalid form submission." },
        { status: 400 },
      );
    }

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(payload)) {
      if (typeof value === "string") params.set(key, value);
    }

    const upstream = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: params.toString(),
      cache: "no-store",
      redirect: "follow",
    });

    const result: unknown = await upstream.json();
    if (!upstream.ok || !result || typeof result !== "object" || !("success" in result) || result.success !== true) {
      const message =
        result && typeof result === "object" && "message" in result && typeof result.message === "string"
          ? result.message
          : "The form service could not save your submission.";
      return Response.json({ success: false, message }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      {
        success: false,
        message: "We could not submit your form right now. Please try again.",
      },
      { status: 502 },
    );
  }
}