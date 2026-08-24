import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      description,
      image,
      availability,
      bedType,
      maxOccupancy,
      roomSize,
      roomFeatures,
      additionalFeatures,
      photos,
    } = body;

    if (
      !title ||
      !description ||
      !image ||
      availability === undefined ||
      !bedType ||
      !maxOccupancy ||
      !roomSize
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const room = await prisma.room.create({
      data: {
        title,
        description,
        image,
        availability: Number(availability),

        bedType,
        maxOccupancy,
        roomSize,

        roomFeatures: Array.isArray(roomFeatures)
          ? roomFeatures
          : [],

        additionalFeatures: Array.isArray(additionalFeatures)
          ? additionalFeatures
          : [],

        photos: Array.isArray(photos)
          ? photos
          : [],
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Room created successfully.",
        room,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Create room error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create room.",
      },
      { status: 500 }
    );
  }
}