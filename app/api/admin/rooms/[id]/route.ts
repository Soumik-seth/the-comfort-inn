import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const roomId = Number(id);

    if (!Number.isInteger(roomId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid room ID.",
        },
        { status: 400 }
      );
    }

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

    const existingRoom = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!existingRoom) {
      return NextResponse.json(
        {
          success: false,
          message: "Room not found.",
        },
        { status: 404 }
      );
    }

    const room = await prisma.room.update({
      where: {
        id: roomId,
      },

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

        additionalFeatures: Array.isArray(
          additionalFeatures
        )
          ? additionalFeatures
          : [],

        photos: Array.isArray(photos)
          ? photos
          : [],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Room updated successfully.",
      room,
    });

  } catch (error) {
    console.error("Update room error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update room.",
      },
      { status: 500 }
    );
  }
}


//for delete 
export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const roomId = Number(id);

    if (!Number.isInteger(roomId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid room ID.",
        },
        { status: 400 }
      );
    }

    const existingRoom = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!existingRoom) {
      return NextResponse.json(
        {
          success: false,
          message: "Room not found.",
        },
        { status: 404 }
      );
    }

    await prisma.room.delete({
      where: {
        id: roomId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Room deleted successfully.",
    });

  } catch (error) {
    console.error("Delete room error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete room.",
      },
      { status: 500 }
    );
  }
}